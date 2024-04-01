"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserData {
    id: number;
    name: string;
    address: string;
    gender: string;
  }

export async function insertUser(name: string, address: string, gender: string) {
  const res = await prisma.user.create({
    data: {
        name,
        address,
        gender,
    }
  })
  console.log(res);
}

export const GetUser = async (): Promise<UserData[]> => {
    const users = await prisma.user.findMany()
    return users;
}

