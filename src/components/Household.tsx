import React from "react";
import { Text } from "@chakra-ui/react";
import { HouseholdSupport } from "./HouseholdSupport";
import { FoodRationInfo } from "./interface";

const FoodRationInfoData: FoodRationInfo = {
  RequestInfo: {
    RequestedBy: "Peace Connect",
    Duration: "13 June 2021 - Present",
    Frequency: "Daily, Monday - Sunday",
    FrequencyAdditionalRemarks: "Only when requested",
    RequestedPacks: 4,
    Type: "Dry food rations",
    DietaryInfo: "Halal",
    SpecificInfo: "Soft Moist",
    AdditionalRemarks: "Needs milk powder and diapers",
  },
  DeliveryInfo: {
    DeliveryMode: "Door Step",
    AddressOfDistributionPoint: "Blk 123 Ang Mo Kio Ave 1, #01-123, S817263",
    POCName: "Lim Beng Eng",
    POCContactNumber: "81726272",
  },
  PersonalInfo: {
    HouseholdPax: 3,
    RecipientType: "Old and fragile",
    Contact: "92615372",
    YearOfBirth: 1954,
  },
  CharityName: "FFFA",
  CharityProgramme: "Charity Food Programme",
  UpdatedAt: new Date().toUTCString(),
};

export const Household = () => {
  return (
    <div>
      <Text fontSize="6xl" fontWeight="bold">
        Mdm Amanda Bay
      </Text>
      <Text fontSize="large" fontWeight="bold" marginBottom="16">
        Blk 123 Ang Mo Kio Ave 1, #01-123, S817263
      </Text>
      <HouseholdSupport FoodRationInfo={FoodRationInfoData} />
    </div>
  );
};
