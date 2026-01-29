#!/bin/bash
#
# SynthAvatar Production Setup Script
# Easy one-command deployment
#

set -e

echo "🚀 SynthAvatar Production Setup"
echo "================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  No .env file found. Creating from .env.example...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓ Created .env file${NC}"
    echo ""
    echo -e "${YELLOW}IMPORTANT: Edit .env with your actual API keys before proceeding!${NC}"
    echo "Required keys:"
    echo "  - CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY"
    echo "  - GEMINI_API_KEY"
    echo "  - OPENAI_API_KEY"
    echo "  - R2 or S3 credentials"
    echo "  - PINECONE_API_KEY"
    echo "  - ELEVENLABS_API_KEY"
    echo ""
    read -p "Press Enter after editing .env to continue..."
fi

# Load environment variables
export $(cat .env | xargs)

echo "📦 Step 1: Installing Dependencies"
echo "-----------------------------------"
if command -v pnpm &> /dev/null; then
    pnpm install
elif command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

echo "🗄️  Step 2: Setting up Database"
echo "--------------------------------"

# Check if PostgreSQL is running
if ! command -v psql &> /dev/null; then
    echo -e "${YELLOW}⚠️  PostgreSQL CLI not found. Using Docker...${NC}"

    # Start only PostgreSQL and Redis
    docker-compose up -d postgres redis

    # Wait for PostgreSQL to be ready
    echo "Waiting for PostgreSQL to be ready..."
    sleep 5

    echo -e "${GREEN}✓ Database started via Docker${NC}"
else
    echo "PostgreSQL found. Using existing installation."
fi

# Generate Prisma Client
echo "Generating Prisma Client..."
npx prisma generate
echo -e "${GREEN}✓ Prisma Client generated${NC}"

# Run migrations
echo "Running database migrations..."
npx prisma migrate deploy
echo -e "${GREEN}✓ Database migrated${NC}"
echo ""

echo "🎨 Step 3: Building Application"
echo "--------------------------------"
npm run build
echo -e "${GREEN}✓ Application built${NC}"
echo ""

echo "✅ Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "  1. Development:  npm run dev"
echo "  2. Production:   docker-compose up -d"
echo "  3. View logs:    docker-compose logs -f app"
echo "  4. Stop:         docker-compose down"
echo ""
echo "Access the application at: http://localhost:3000"
echo ""
echo "📚 Documentation: ./docs/DEPLOYMENT.md"
echo ""
