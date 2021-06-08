import React from "react";
import { FoodRationInfo } from "./interface";
import { Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { MdInfo } from "react-icons/md";
import { Section } from "./Section";

export interface HouseholdSupportProps {
  FoodRationInfo?: FoodRationInfo;
}

export const HouseholdSupport = ({ FoodRationInfo }: HouseholdSupportProps) => {
  return (
    <div>
      <Flex alignItems="center">
        <Text fontSize="large" fontWeight="bold" marginRight="4">
          {FoodRationInfo?.CharityName}
        </Text>
        <Button
          size="sm"
          variant="outline"
          leftIcon={<MdInfo />}
          colorScheme="purple"
        >
          More Info
        </Button>
      </Flex>
      <Text fontSize="medium">{FoodRationInfo?.CharityProgramme}</Text>
      <Text fontSize="medium" color="gray.500" as="i">
        {FoodRationInfo?.UpdatedAt}
      </Text>

      <Flex flexWrap="wrap" mt="10">
        <Section title="Food Ration Info" />
        <Spacer />
        <Section title="Delivery Info" />
        <Spacer />
        <Section title="Personal Info" />
        <Spacer />
      </Flex>
    </div>
  );
};
