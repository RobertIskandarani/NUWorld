import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-171017718-1';
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category = 'Blog category') => {
    const eventTracker = (action = 'test action', label = 'test label') => {
        ReactGA.event({ category, action, label });
    };
    return eventTracker;
};

export default useAnalyticsEventTracker;
