import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-T4EEP82VG5';
ReactGA.initialize(TRACKING_ID);
console.log('me conecte con ', TRACKING_ID);

const useAnalyticsEventTracker = (category = 'Blog category') => {
    const eventTracker = (action = 'test action', label = 'test label') => {
        ReactGA.event({ category, action, label });
    };
    return eventTracker;
};

export default useAnalyticsEventTracker;
