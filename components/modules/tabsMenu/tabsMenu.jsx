import useDeviceSelector from '../../../hooks/useDeviceSelector';
import TabsMenuStyle from './tabsMenu.styles'

const TabsMenu = ({ tabs, currentTab, setCurrentTab }) => {
  const isMobile = useDeviceSelector(true, false);

  return (
    <TabsMenuStyle>
      {tabs.map((tab) => (
        <button
          className={`tab-button ${currentTab === tab.key ? 'selected' : 'notSelected'}`}
          type="button"
          onClick={() => {
            if (tab.key === 0) {
              setCurrentTab(0);
            }
            if (tab.key === 1) {
              setCurrentTab(1);
            }
          }}
          key={tab.key}
        >
          <span className="tab-button-content" data-cy={tab.label}>
            <p className="tab-button-content-text">{tab.label}</p>
          </span>
          {!isMobile && <div className="tab-button-line" />}
        </button>
      ))}
    </TabsMenuStyle>
  );
};

export default TabsMenu;
