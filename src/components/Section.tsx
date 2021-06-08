import React from "react";
import { Text, Box, Skeleton, Stack } from "@chakra-ui/react";

export interface ISectionProps {
  title: string;
}

export const Section = ({ title }: ISectionProps) => {
  return (
    <Box
      p="6"
      mb="8"
      borderWidth="1px"
      rounded="lg"
      flexBasis={["100%", "45%"]}
    >
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
