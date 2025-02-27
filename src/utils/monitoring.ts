
interface CallMetrics {
  connectionTime: number;
  participantCount: number;
  videoEnabled: boolean;
  audioEnabled: boolean;
  networkQuality: number;
  provider?: string;
}

export const trackCallMetrics = (metrics: CallMetrics) => {
  // This will automatically send metrics to Vercel Analytics when deployed
  if (typeof window !== 'undefined' && 'analytics' in window) {
    (window as any).analytics?.track('video_call_metrics', {
      ...metrics,
      provider: metrics.provider || 'zoho', // Default to zoho as the provider
      timestamp: new Date().toISOString()
    });
  }
  
  // Log metrics for development
  console.log('Call Metrics:', metrics);
};
