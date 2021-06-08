import React from "react";
import { Text, Box, Skeleton, Stack } from "@chakra-ui/react";

export interface IGridSectionProps {
  title: string;
}

export const GridSection = ({ title }: IGridSectionProps) => {
  return (
    <Box p="6" mb="8" borderWidth="1px" rounded="lg" height="100%">
      <Text fontSize="large" fontWeight="bold" marginBottom="4">
        {title}
      </Text>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Box>
  );
};
