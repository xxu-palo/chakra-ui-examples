import React from "react";
import { FoodRationInfo } from "./interface";
import {
  Text,
  Button,
  Flex,
  Spacer,
  Grid,
  Divider,
  GridItem,
} from "@chakra-ui/react";
import { MdInfo } from "react-icons/md";
import { Section } from "./Section";
import { GridSection } from "./GridSection";

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

      <Flex flexWrap="wrap" mt="8">
        <Section title="Food Ration Info" />
        <Spacer />
        <Section title="Delivery Info" />
        <Spacer />
        <Section title="Personal Info" />
        <Spacer />
      </Flex>

      <Divider m="6" bg="purple.700" />

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={8}
      >
        <GridItem colSpan={[3, 2]}>
          <GridSection title="Food Ration Info" />
        </GridItem>
        <GridItem rowSpan={[1, 2]} colSpan={[3, 1]}>
          <GridSection title="Personal Info" />
        </GridItem>
        <GridItem colSpan={[3, 2]}>
          <GridSection title="Delivery Info" />
        </GridItem>
      </Grid>
    </div>
  );
};
