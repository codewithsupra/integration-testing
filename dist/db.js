"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const prisma_1 = require("./generated/prisma");
exports.prismaClient = new prisma_1.PrismaClient();
//eport this client to query our migrated DB
