import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowLeftRight } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "./ui/badge";

const SettlementsList = ({
  settlements,
  isGroupSettlement = false,
  userLookUpMap,
}) => {
  const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);

  if (!settlements || !settlements.length) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          No settlements found
        </CardContent>
      </Card>
    );
  }
  // Helper to get user details form cache or look up
  const getUserDetails = (userId) => {
    // simplified fallback
    return {
      name:
        userId === currentUser?._id
          ? "You"
          : userLookUpMap[userId]?.name || "other User",
      imagerUrl: null,
      id: userId,
    };
  };
  return (
    <div className="flex flex-col gap-4">
      {settlements.map((settlement) => {
        const payer = getUserDetails(settlement.paidByUserId);
        const receiver = getUserDetails(settlement.receivedByUserId);
        const isCurrentUserPayer = settlement.paidByUserId === currentUser?._id;
        const isCurrentUserReceiver =
          settlement.receivedByUserId === currentUser?._id;
        return (
          <Card
            className="hover:bg-muted/30 transition-colors"
            key={settlement._id}
          >
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Settlement Icon */}
                  <div className="bg-primary/10 p-2 rounded-full">
                    <ArrowLeftRight className="h-5 w-5 text-primary" />
                  </div>
                  <div className="">
                    <h3 className="font-medium">
                      {isCurrentUserPayer
                        ? `You Paid ${receiver.name}`
                        : isCurrentUserReceiver
                          ? `${payer.name} Paid You`
                          : `${payer.name} Paid ${receiver.name}`}
                    </h3>
                    <div className="flex items-center text-sm gap-2 text-muted-foreground">
                      <span>
                        {format(new Date(settlement.date), "MMM d, yyyy")}
                      </span>
                      {settlement.note && (
                        <>
                          <span>•</span>
                          <span>{settlement.note}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-medium">
                    ${settlement.amount.toFixed(2)}
                  </div>
                  {isGroupSettlement ? (
                    <Badge variant="outline" className="mt-1">
                      Group settlement
                    </Badge>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {isCurrentUserPayer ? (
                        <span className="text-amber-600">You paid</span>
                      ) : isCurrentUserReceiver ? (
                        <span className="text-green-600">You received</span>
                      ) : (
                        <span>Payment</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SettlementsList;
