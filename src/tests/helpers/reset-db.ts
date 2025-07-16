import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient()
  const  cleardB =async()=> {
 
   await  prisma.request.deleteMany();
}
export default cleardB;