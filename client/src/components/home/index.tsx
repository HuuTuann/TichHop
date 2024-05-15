"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const MyHome = () => {
  const router = useRouter();
  const [link, setLink] = useState("/personal");

  const handleChange = (value: "/personal" | "/employment") => {
    setLink(value);
  };

  const handleContinue = () => {
    router.push(link);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Software Measurement & Analysis</CardTitle>
          <CardDescription>
            Software measurement and analysis is a process that helps to
            understand, quantify, and evaluate software products and processes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="tool">Tool</Label>
            <Select
              onValueChange={(value: "/personal" | "/employment") =>
                handleChange(value)
              }
              defaultValue="/personal"
            >
              <SelectTrigger id="tool">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="/personal">Personal</SelectItem>
                <SelectItem value="/employment">Employment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleContinue}>
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyHome;
