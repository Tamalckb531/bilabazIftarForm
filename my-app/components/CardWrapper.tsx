"use client";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { GetUser } from "@/actions/form";

interface User {
  id: number;
  name: string;
  address: string;
  gender: string;
  // Add any other properties you expect a user object to have
}

const CardWrapper = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res: User[] = await GetUser(); // Assuming GetUser returns an array of users
        setUsers(res);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  if (!users.length) {
    return (
      <div className="flex flex-col gap-5">
        <p className="text-">No bilabaz to display</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Render CardComponent for each user */}
      {users?.map((user, index) => (
        <CardComponent
          key={index} // Ensure each element in a list has a unique key
          name={user.name}
          address={user.address}
          gender={user.gender}
          isArittra={user.name.toLocaleLowerCase().includes("arittra")}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
