export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
    (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

interface EventProps {
    action: string;
    category: string;
    label: string;
    value: string;
}

export const event = ({ action, category, label, value }: EventProps) => {
    (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
