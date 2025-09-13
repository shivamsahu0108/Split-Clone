"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

import React from "react";
import ExpenseForm from "./components/ExpenseForm";

const newExpensePage = () => {
  const router = useRouter();
  return (
    <div className="container max-w-3xl mx-auto py-6">
      <div class="mb-6">
        <h1 class="text-3xl md:text-5xl gradient-title">Add a new expense</h1>
        <p class="text-muted-foreground mt-1">
          Record a new expense to split with others
        </p>
      </div>
      <Card>
        <CardContent>
          <Tabs defaultValue="individual" class="pb-3">
            <TabsList class="grid w-full grid-cols-1 sm:grid-cols-2">
              <TabsTrigger value="individual">Individual Expenses</TabsTrigger>
              <TabsTrigger value="group">Group Expenses</TabsTrigger>
            </TabsList>
            <TabsContent value="individual" className="mt-0">
              <ExpenseForm
                type="individual"
                onSuccess={(id) => router.push(`/person/${id}`)}
              />
            </TabsContent>
            <TabsContent value="group" className={"mt-0"}>
              <ExpenseForm
                type="group"
                onSuccess={(id) => router.push(`/groups/${id}`)}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default newExpensePage;
