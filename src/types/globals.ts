export interface CardItem {
    icon: string;
    title: string;
    description: string;
    href?: string;
}

export type CardData = {
    data: CardItem[];
}

export interface QuestionItem {
    id: number;
    question: string;
    options?: { label: string; value?: string; content: string }[];
    answer?: string;
    analysis?: string;
  };

export interface QuestionBank {
    name: string;
    key: string;
};  