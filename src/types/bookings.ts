// Updated TypeScript interfaces
export interface Vehicle {
  id: string;
  model: string;
  count: number;
  price: number;
}

export interface VehicleType {
  name: string;
  vehicles: Vehicle[];
}

export interface VehicleCategory {
  label: string;
  startingPrice: number;
  types: VehicleType[];
}

export interface ShopData {
  vehicleTypes: Record<string, VehicleCategory>;
  bookings: Booking[];
}

// New interface for bookings
export interface Booking {
  vehicleId: string;
  startDate: string;
  endDate: string;
  quantity: number;
}