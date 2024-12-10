type RequestImage = {
    id: number;
    documentId: string;
    url: string;
};

export type Product = {
    id: number;
    documentId: string;
    name: string;
    available: boolean;
    defaultPrice: number;
    discount: null | number;
    dealSection: boolean;
    description: string;
    used: boolean;
    parameters: string[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    type: string;
    images: RequestImage[];
};
