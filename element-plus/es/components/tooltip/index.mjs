import '../../utils/index.mjs';
import Tooltip from './src/tooltip.mjs';
export { tooltipEmits, useTooltipModelToggle, useTooltipModelToggleEmits, useTooltipModelToggleProps, useTooltipProps } from './src/tooltip2.mjs';
export { useTooltipTriggerProps } from './src/trigger.mjs';
export { useTooltipContentProps } from './src/content2.mjs';
export { TOOLTIP_INJECTION_KEY } from './src/constants.mjs';
import { withInstall } from '../../utils/vue/install.mjs';

const ElTooltip = withInstall(Tooltip);

export { ElTooltip, ElTooltip as default };
//# sourceMappingURL=index.mjs.map
