export interface FoodRationInfo {
  RequestInfo: RequestInfo;
  DeliveryInfo: DeliveryInfo;
  PersonalInfo: PersonalInfo;
  CharityName: string;
  CharityProgramme: string;
  UpdatedAt: string;
}

export interface RequestInfo {
  RequestedBy: string;
  Duration: string;
  Frequency: string;
  FrequencyAdditionalRemarks: string;
  RequestedPacks: number;
  Type: string;
  DietaryInfo: string;
  SpecificInfo: string;
  AdditionalRemarks: string;
}

export interface DeliveryInfo {
  DeliveryMode: string;
  AddressOfDistributionPoint: string;
  POCName: string;
  POCContactNumber: string;
}

export interface PersonalInfo {
  HouseholdPax: number;
  RecipientType: string;
  Contact: string;
  YearOfBirth: number;
}
