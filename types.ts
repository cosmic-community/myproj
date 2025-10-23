// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
    icon?: string;
    color?: string;
  };
}

// Chapter interface
export interface Chapter extends CosmicObject {
  type: 'chapters';
  metadata: {
    title: string;
    excerpt?: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: Category;
    audio_file?: {
      url: string;
    };
    interactive_elements?: {
      statistics?: Record<string, number>;
      interactiveMap?: Record<string, number>;
      quiz?: Array<{
        question: string;
        answers: string[];
        correct: number;
      }>;
      highlights?: string[];
      practiceExercises?: Array<{
        title: string;
        description: string;
      }>;
      levels?: string[];
    };
    featured?: boolean;
    order?: number;
  };
}

// Quote interface
export interface Quote extends CosmicObject {
  type: 'quotes';
  metadata: {
    arabic_text: string;
    russian_translation: string;
    surah?: string;
    ayah?: string;
    related_chapter?: string | Chapter;
    audio?: {
      url: string;
    };
  };
}

// FAQ interface
export interface FAQ extends CosmicObject {
  type: 'faq';
  metadata: {
    question: string;
    answer: string;
    category?: string | Category;
    popular?: boolean;
  };
}

// Resource type literal
export type ResourceType = 'video' | 'audio' | 'document' | 'link';

// Resource interface
export interface Resource extends CosmicObject {
  type: 'resources';
  metadata: {
    title: string;
    description?: string;
    resource_type: {
      key: ResourceType;
      value: string;
    };
    resource_url?: string;
    media_file?: {
      url: string;
    };
    thumbnail?: {
      url: string;
      imgix_url: string;
    };
    categories?: Category[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isChapter(obj: CosmicObject): obj is Chapter {
  return obj.type === 'chapters';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

export function isQuote(obj: CosmicObject): obj is Quote {
  return obj.type === 'quotes';
}

export function isFAQ(obj: CosmicObject): obj is FAQ {
  return obj.type === 'faq';
}

export function isResource(obj: CosmicObject): obj is Resource {
  return obj.type === 'resources';
}

// Utility type for creating new objects
export type CreateChapterData = Omit<Chapter, 'id' | 'created_at' | 'modified_at'>;