import {useContext} from 'react';
import {ConfigContext} from '../../context/configContext'

export const RenderCountConfig = () => {
    const context = useContext(ConfigContext);
    return (
        <div>
            <input 
                type="checkbox" 
                id="render-count" 
                name="render count" 
                checked={context?.enableRenderCount} 
                onChange={
                    () => context?.setEnableRenderCount(!context?.enableRenderCount)
                }
            />
            <label htmlFor="render-count">Render Count</label>
        </div>
    )
}