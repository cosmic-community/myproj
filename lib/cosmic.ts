import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
});

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Import types
import type { Chapter, Category, Quote, FAQ, Resource, CosmicResponse } from '@/types';

// Fetch all chapters with related categories
export async function getChapters(): Promise<Chapter[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'chapters' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const chapters = response.objects as Chapter[];
    
    // Sort by order if available, otherwise by created_at
    return chapters.sort((a, b) => {
      const orderA = a.metadata?.order ?? 999;
      const orderB = b.metadata?.order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch chapters');
  }
}

// Fetch featured chapters
export async function getFeaturedChapters(): Promise<Chapter[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'chapters',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const chapters = response.objects as Chapter[];
    
    return chapters.sort((a, b) => {
      const orderA = a.metadata?.order ?? 999;
      const orderB = b.metadata?.order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured chapters');
  }
}

// Fetch single chapter by slug
export async function getChapterBySlug(slug: string): Promise<Chapter | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'chapters',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Chapter;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch chapter');
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Category[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}

// Fetch all quotes
export async function getQuotes(): Promise<Quote[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'quotes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Quote[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch quotes');
  }
}

// Fetch all FAQs
export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faq' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as FAQ[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch FAQs');
  }
}

// Fetch popular FAQs
export async function getPopularFAQs(): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'faq',
        'metadata.popular': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as FAQ[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch popular FAQs');
  }
}

// Fetch all resources
export async function getResources(): Promise<Resource[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'resources' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Resource[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch resources');
  }
}

// Fetch resources by type
export async function getResourcesByType(resourceType: string): Promise<Resource[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'resources',
        'metadata.resource_type.key': resourceType
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Resource[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch resources by type');
  }
}