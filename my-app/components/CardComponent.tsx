import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CardComponentProps {
  name: string;
  address: string;
  gender: string;
  isArittra: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({
  name,
  address,
  gender,
  isArittra,
}) => {
  return (
    <>
      <Card
        className={`dark:${
          isArittra ? " bg-emerald-900" : " bg-slate-950"
        } py-3 `}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle
            className={`text-xl font-bold ${
              isArittra ? " text-orange-500" : " "
            }`}
          >
            {name} <p className="text-sm">{isArittra && "(Dev Manus)"}</p>
          </CardTitle>
          <Badge className=" bg-gray-200 text-gray-900 font-semibold">
            {gender}
          </Badge>
        </CardHeader>
        <CardContent>
          <p
            className={`text-xs ${
              isArittra ? " text-white" : " text-muted-foreground"
            } `}
          >
            {address}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
