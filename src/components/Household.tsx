import React from "react";
import { Text } from "@chakra-ui/react";
import { HouseholdSupport } from "./HouseholdSupport";
import { FoodRationInfo } from "./interface";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const FoodRationInfoData: FoodRationInfo[] = [
  {
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
  },
  {
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
    CharityName: "Sunny's Kitchen",
    CharityProgramme: "Charity Food Programme",
    UpdatedAt: new Date().toUTCString(),
  },
];

export const Household = () => {
  return (
    <div>
      <Text fontSize="6xl" fontWeight="bold">
        Mdm Amanda Bay
      </Text>
      <Text fontSize="large" fontWeight="bold" marginBottom="10">
        Blk 123 Ang Mo Kio Ave 1, #01-123, S817263
      </Text>

      <Tabs>
        <TabList mb="4" outline="none">
          {FoodRationInfoData.map((data) => (
            <Tab key={data.CharityName}>{data.CharityName}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {FoodRationInfoData.map((data) => (
            <TabPanel key={data.CharityName}>
              <HouseholdSupport
                foodRationInfo={data}
                display={data.CharityName === "FFFA" ? "flex" : "grid"}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};
