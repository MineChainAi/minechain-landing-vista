
import { Track } from 'livekit-client';

interface CallMetrics {
  connectionTime: number;
  participantCount: number;
  videoEnabled: boolean;
  audioEnabled: boolean;
  networkQuality: number;
}

export const trackCallMetrics = (metrics: CallMetrics) => {
  // This will automatically send metrics to Vercel Analytics when deployed
  if (typeof window !== 'undefined' && 'analytics' in window) {
    (window as any).analytics?.track('video_call_metrics', metrics);
  }
  
  // Log metrics for development
  console.log('Call Metrics:', metrics);
};
