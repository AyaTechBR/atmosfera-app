export type UserRole = 'admin' | 'designer';

export interface User {
    id: string;
    name: string;
    role: UserRole;
    avatar?: string;
}

export interface Designer extends User {
    role: 'designer';
    xp: number;
    level: number;
    specialty: string[];
}

export type DeliveryType = 'Carousel' | 'Poster' | 'Video' | 'Branding' | 'Other';

export interface Delivery {
    id: string;
    designerId: string;
    type: DeliveryType;
    title: string;
    timestamp: string;
    xpEarned: number;
    status: 'delivered' | 'reviewed';
}

export interface KPIStats {
    totalDeliveries: number;
    averageSpeed: number; // in hours or arbitrary unit
    qualityScore: number; // 0-100
    evolutionTrend: 'up' | 'down' | 'stable';
}
