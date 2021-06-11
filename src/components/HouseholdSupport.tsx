import React from "react";
import { FoodRationInfo } from "./interface";
import { Text, Button, Flex, Spacer, Grid, GridItem } from "@chakra-ui/react";
import { MdInfo } from "react-icons/md";
import { Section } from "./Section";
import { GridSection } from "./GridSection";

export interface HouseholdSupportProps {
  display: "grid" | "flex";
  foodRationInfo?: FoodRationInfo;
}

export const HouseholdSupport = ({
  display,
  foodRationInfo,
}: HouseholdSupportProps) => {
  const handleClick = () => {
    console.log("clicked button");
  };

  return (
    <div>
      <Flex alignItems="center">
        <Text fontSize="large" fontWeight="bold" marginRight="4">
          {foodRationInfo?.CharityName}
        </Text>
        <Button
          size="sm"
          variant="outline"
          leftIcon={<MdInfo />}
          colorScheme="purple"
          onClick={handleClick}
        >
          More Info
        </Button>
      </Flex>
      <Text fontSize="medium">{foodRationInfo?.CharityProgramme}</Text>
      <Text fontSize="medium" color="gray.500" as="i">
        {foodRationInfo?.UpdatedAt}
      </Text>

      <Spacer mb="8" />

      {display === "flex" ? (
        <Flex flexWrap="wrap">
          <Section title="Food Ration Info" />
          <Spacer />
          <Section title="Delivery Info" />
          <Spacer />
          <Section title="Personal Info" />
          <Spacer />
        </Flex>
      ) : (
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
      )}
    </div>
  );
};
