import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-T4EEP82VG5';
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category = 'Blog category') => {
    const eventTracker = (action = 'test action', label = 'test label') => {
        ReactGA.event({ category, action, label });
    };
    console.log('me conecte con ', TRACKING_ID, 'con el ', eventTracker);
    return eventTracker;
};

export default useAnalyticsEventTracker;
