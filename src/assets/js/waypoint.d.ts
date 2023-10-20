// In a separate TypeScript declaration file, e.g., waypoint.d.ts
declare module 'waypoints' {
  interface WaypointOptions {
    // Define the waypoint options if needed
    // For example, you can specify offset, handler, and other options here
    offset?: string | number;
    handler?: (direction: string) => void;
  }

  interface Waypoint {
    new (options?: WaypointOptions): Waypoint;
  }

  const Waypoint: Waypoint;
  export = Waypoint;
}