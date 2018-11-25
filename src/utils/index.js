const RESPONSIVE_MODE = false;

export function _getPanelLimit() {
    let panelLimit = 3;
    if(RESPONSIVE_MODE){
        return panelLimit;
    }
    if(window.innerWidth < 900){
        panelLimit =1;
    } else if(window.innerWidth < 1200){
        panelLimit =2;
    }
    return panelLimit;
}