#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Bootstrapping WealthBridge Agent Framework...\n');

// Step 1: Validate Node and pnpm versions
console.log('📋 Step 1: Validating environment...');
try {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.split('.')[0].slice(1));
  
  if (majorVersion < 20) {
    console.error('❌ Node.js 20+ required. Current version:', nodeVersion);
    process.exit(1);
  }
  console.log('✓ Node.js version:', nodeVersion);

  const pnpmVersion = execSync('pnpm --version', { encoding: 'utf-8' }).trim();
  console.log('✓ pnpm version:', pnpmVersion);
} catch (error) {
  console.error('❌ pnpm not found. Install with: npm install -g pnpm');
  process.exit(1);
}

// Step 2: Create necessary directories
console.log('\n📁 Step 2: Creating data directories...');
const dirs = [
  '../../data',
  '../../data/capsule-state',
  '../../data/capsule-logs',
  '../../data/agent-memory',
  '../../logs'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created ${dir}`);
  }
});

// Step 3: Generate .env from template
console.log('\n🔐 Step 3: Checking environment file...');
const rootEnvPath = path.join(__dirname, '../../.env');
const templatePath = path.join(__dirname, '../../.env.template');
if (!fs.existsSync(rootEnvPath) && fs.existsSync(templatePath)) {
  fs.copyFileSync(templatePath, rootEnvPath);
  console.log('✓ Created .env file (remember to add your API keys)');
} else {
  console.log('✓ .env file already exists');
}

// Success message
console.log('\n');
console.log('╔════════════════════════════════════════════════════════╗');
console.log('║  🎉 WealthBridge Agent Framework Bootstrap Complete!  ║');
console.log('╚════════════════════════════════════════════════════════╝');
console.log('\n📝 Next steps:');
console.log('  1. Update .env with your API keys');
console.log('  2. Run: pnpm install');
console.log('  3. Run: pnpm dev');
console.log('\n');
