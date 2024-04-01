import installer from './defaults.mjs';
export { default } from './defaults.mjs';
import './components/index.mjs';
import './constants/index.mjs';
import './directives/index.mjs';
import './hooks/index.mjs';
export { makeInstaller } from './make-installer.mjs';
export { default as dayjs } from 'dayjs';
export { affixEmits, affixProps } from './components/affix/src/affix2.mjs';
export { ElAffix } from './components/affix/index.mjs';
export { alertEffects, alertEmits, alertProps } from './components/alert/src/alert2.mjs';
export { ElAlert } from './components/alert/index.mjs';
export { autocompleteEmits, autocompleteProps } from './components/autocomplete/src/autocomplete.mjs';
export { ElAutocomplete } from './components/autocomplete/index.mjs';
export { avatarEmits, avatarProps } from './components/avatar/src/avatar2.mjs';
export { ElAvatar } from './components/avatar/index.mjs';
export { backtopEmits, backtopProps } from './components/backtop/src/backtop2.mjs';
export { ElBacktop } from './components/backtop/index.mjs';
export { badgeProps } from './components/badge/src/badge2.mjs';
export { ElBadge } from './components/badge/index.mjs';
export { breadcrumbProps } from './components/breadcrumb/src/breadcrumb.mjs';
export { breadcrumbItemProps } from './components/breadcrumb/src/breadcrumb-item.mjs';
export { breadcrumbKey } from './components/breadcrumb/src/constants.mjs';
export { ElBreadcrumb, ElBreadcrumbItem } from './components/breadcrumb/index.mjs';
export { buttonEmits, buttonNativeTypes, buttonProps, buttonTypes } from './components/button/src/button.mjs';
export { buttonGroupContextKey } from './components/button/src/constants.mjs';
export { ElButton, ElButtonGroup } from './components/button/index.mjs';
export { calendarEmits, calendarProps } from './components/calendar/src/calendar.mjs';
export { ElCalendar } from './components/calendar/index.mjs';
export { cardProps } from './components/card/src/card.mjs';
export { ElCard } from './components/card/index.mjs';
export { carouselEmits, carouselProps } from './components/carousel/src/carousel2.mjs';
export { carouselItemProps } from './components/carousel/src/carousel-item2.mjs';
export { carouselContextKey } from './components/carousel/src/constants.mjs';
export { ElCarousel, ElCarouselItem } from './components/carousel/index.mjs';
export { cascaderEmits, cascaderProps } from './components/cascader/src/cascader2.mjs';
export { ElCascader } from './components/cascader/index.mjs';
export { CASCADER_PANEL_INJECTION_KEY } from './components/cascader-panel/src/types.mjs';
export { CommonProps, DefaultProps, useCascaderConfig } from './components/cascader-panel/src/config.mjs';
export { ElCascaderPanel } from './components/cascader-panel/index.mjs';
export { checkTagEmits, checkTagProps } from './components/check-tag/src/check-tag2.mjs';
export { ElCheckTag } from './components/check-tag/index.mjs';
export { checkboxGroupEmits, checkboxGroupProps } from './components/checkbox/src/checkbox-group2.mjs';
export { checkboxEmits, checkboxProps } from './components/checkbox/src/checkbox.mjs';
export { checkboxGroupContextKey } from './components/checkbox/src/constants.mjs';
export { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from './components/checkbox/index.mjs';
export { colProps } from './components/col/src/col2.mjs';
export { ElCol } from './components/col/index.mjs';
export { collapseEmits, collapseProps, emitChangeFn } from './components/collapse/src/collapse.mjs';
export { collapseItemProps } from './components/collapse/src/collapse-item.mjs';
export { collapseContextKey } from './components/collapse/src/constants.mjs';
export { ElCollapse, ElCollapseItem } from './components/collapse/index.mjs';
export { ElCollapseTransition } from './components/collapse-transition/index.mjs';
export { colorPickerContextKey, colorPickerEmits, colorPickerProps } from './components/color-picker/src/color-picker.mjs';
export { ElColorPicker } from './components/color-picker/index.mjs';
export { messageConfig } from './components/config-provider/src/config-provider.mjs';
export { configProviderProps } from './components/config-provider/src/config-provider-props.mjs';
export { configProviderContextKey } from './components/config-provider/src/constants.mjs';
export { provideGlobalConfig, useGlobalComponentSettings, useGlobalConfig } from './components/config-provider/src/hooks/use-global-config.mjs';
export { ElConfigProvider } from './components/config-provider/index.mjs';
export { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from './components/container/index.mjs';
export { countdownEmits, countdownProps } from './components/countdown/src/countdown.mjs';
export { ElCountdown } from './components/countdown/index.mjs';
export { ROOT_PICKER_INJECTION_KEY } from './components/date-picker/src/constants.mjs';
export { datePickerProps } from './components/date-picker/src/props/date-picker.mjs';
export { ElDatePicker } from './components/date-picker/index.mjs';
export { descriptionProps } from './components/descriptions/src/description2.mjs';
export { ElDescriptions, ElDescriptionsItem } from './components/descriptions/index.mjs';
export { useDialog } from './components/dialog/src/use-dialog.mjs';
export { dialogEmits, dialogProps } from './components/dialog/src/dialog.mjs';
export { dialogInjectionKey } from './components/dialog/src/constants.mjs';
export { ElDialog } from './components/dialog/index.mjs';
export { dividerProps } from './components/divider/src/divider2.mjs';
export { ElDivider } from './components/divider/index.mjs';
export { drawerEmits, drawerProps } from './components/drawer/src/drawer.mjs';
export { ElDrawer } from './components/drawer/index.mjs';
export { DROPDOWN_COLLECTION_INJECTION_KEY, DROPDOWN_COLLECTION_ITEM_INJECTION_KEY, ElCollection, ElCollectionItem, FIRST_KEYS, FIRST_LAST_KEYS, LAST_KEYS, dropdownItemProps, dropdownMenuProps, dropdownProps } from './components/dropdown/src/dropdown.mjs';
export { DROPDOWN_INJECTION_KEY } from './components/dropdown/src/tokens.mjs';
export { ElDropdown, ElDropdownItem, ElDropdownMenu } from './components/dropdown/index.mjs';
export { emptyProps } from './components/empty/src/empty.mjs';
export { ElEmpty } from './components/empty/index.mjs';
export { formEmits, formProps } from './components/form/src/form2.mjs';
export { formItemProps, formItemValidateStates } from './components/form/src/form-item2.mjs';
export { formContextKey, formItemContextKey } from './components/form/src/constants.mjs';
export { useDisabled, useFormDisabled, useFormSize, useSize } from './components/form/src/hooks/use-form-common-props.mjs';
export { useFormItem, useFormItemInputId } from './components/form/src/hooks/use-form-item.mjs';
export { ElForm, ElFormItem } from './components/form/index.mjs';
export { iconProps } from './components/icon/src/icon2.mjs';
export { ElIcon } from './components/icon/index.mjs';
export { imageEmits, imageProps } from './components/image/src/image.mjs';
export { ElImage } from './components/image/index.mjs';
export { imageViewerEmits, imageViewerProps } from './components/image-viewer/src/image-viewer2.mjs';
export { ElImageViewer } from './components/image-viewer/index.mjs';
export { inputEmits, inputProps } from './components/input/src/input.mjs';
export { ElInput } from './components/input/index.mjs';
export { inputNumberEmits, inputNumberProps } from './components/input-number/src/input-number2.mjs';
export { ElInputNumber } from './components/input-number/index.mjs';
export { linkEmits, linkProps } from './components/link/src/link2.mjs';
export { ElLink } from './components/link/index.mjs';
export { menuEmits, menuProps } from './components/menu/src/menu.mjs';
export { menuItemEmits, menuItemProps } from './components/menu/src/menu-item.mjs';
export { menuItemGroupProps } from './components/menu/src/menu-item-group.mjs';
export { subMenuProps } from './components/menu/src/sub-menu.mjs';
export { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from './components/menu/index.mjs';
export { overlayEmits, overlayProps } from './components/overlay/src/overlay.mjs';
export { ElOverlay } from './components/overlay/index.mjs';
export { pageHeaderEmits, pageHeaderProps } from './components/page-header/src/page-header.mjs';
export { ElPageHeader } from './components/page-header/index.mjs';
export { paginationEmits, paginationProps } from './components/pagination/src/pagination.mjs';
export { elPaginationKey } from './components/pagination/src/constants.mjs';
export { ElPagination } from './components/pagination/index.mjs';
export { popconfirmEmits, popconfirmProps } from './components/popconfirm/src/popconfirm2.mjs';
export { ElPopconfirm } from './components/popconfirm/index.mjs';
export { Effect, popperProps, roleTypes, usePopperProps } from './components/popper/src/popper.mjs';
export { popperTriggerProps, usePopperTriggerProps } from './components/popper/src/trigger.mjs';
export { popperContentEmits, popperContentProps, popperCoreConfigProps, usePopperContentEmits, usePopperContentProps, usePopperCoreConfigProps } from './components/popper/src/content.mjs';
export { popperArrowProps, usePopperArrowProps } from './components/popper/src/arrow2.mjs';
export { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './components/popper/src/constants.mjs';
export { default as ElPopperArrow } from './components/popper/src/arrow.mjs';
export { default as ElPopperTrigger } from './components/popper/src/trigger2.mjs';
export { default as ElPopperContent } from './components/popper/src/content2.mjs';
export { ElPopper } from './components/popper/index.mjs';
export { progressProps } from './components/progress/src/progress.mjs';
export { ElProgress } from './components/progress/index.mjs';
export { radioEmits, radioProps, radioPropsBase } from './components/radio/src/radio.mjs';
export { radioGroupEmits, radioGroupProps } from './components/radio/src/radio-group2.mjs';
export { radioButtonProps } from './components/radio/src/radio-button2.mjs';
export { radioGroupKey } from './components/radio/src/constants.mjs';
export { ElRadio, ElRadioButton, ElRadioGroup } from './components/radio/index.mjs';
export { rateEmits, rateProps } from './components/rate/src/rate.mjs';
export { ElRate } from './components/rate/index.mjs';
export { IconComponentMap, IconMap, resultProps } from './components/result/src/result.mjs';
export { ElResult } from './components/result/index.mjs';
export { RowAlign, RowJustify, rowProps } from './components/row/src/row.mjs';
export { rowContextKey } from './components/row/src/constants.mjs';
export { ElRow } from './components/row/index.mjs';
export { BAR_MAP, GAP, renderThumbStyle } from './components/scrollbar/src/util.mjs';
export { scrollbarEmits, scrollbarProps } from './components/scrollbar/src/scrollbar.mjs';
export { thumbProps } from './components/scrollbar/src/thumb.mjs';
export { scrollbarContextKey } from './components/scrollbar/src/constants.mjs';
export { ElScrollbar } from './components/scrollbar/index.mjs';
export { selectGroupKey, selectKey } from './components/select/src/token.mjs';
export { ElOption, ElOptionGroup, ElSelect } from './components/select/index.mjs';
export { selectV2InjectionKey } from './components/select-v2/src/token.mjs';
export { ElSelectV2 } from './components/select-v2/index.mjs';
export { skeletonProps } from './components/skeleton/src/skeleton2.mjs';
export { skeletonItemProps } from './components/skeleton/src/skeleton-item.mjs';
export { ElSkeleton, ElSkeletonItem } from './components/skeleton/index.mjs';
export { sliderEmits, sliderProps } from './components/slider/src/slider.mjs';
export { sliderContextKey } from './components/slider/src/constants.mjs';
export { ElSlider } from './components/slider/index.mjs';
export { spaceProps } from './components/space/src/space.mjs';
export { useSpace } from './components/space/src/use-space.mjs';
export { ElSpace } from './components/space/index.mjs';
export { statisticProps } from './components/statistic/src/statistic.mjs';
export { ElStatistic } from './components/statistic/index.mjs';
export { stepProps } from './components/steps/src/item2.mjs';
export { stepsEmits, stepsProps } from './components/steps/src/steps2.mjs';
export { ElStep, ElSteps } from './components/steps/index.mjs';
export { switchEmits, switchProps } from './components/switch/src/switch2.mjs';
export { ElSwitch } from './components/switch/index.mjs';
export { ElTable, ElTableColumn } from './components/table/index.mjs';
export { Alignment as TableV2Alignment, FixedDir as TableV2FixedDir, SortOrder as TableV2SortOrder } from './components/table-v2/src/constants.mjs';
export { default as TableV2 } from './components/table-v2/src/table-v2.mjs';
export { placeholderSign as TableV2Placeholder } from './components/table-v2/src/private.mjs';
export { autoResizerProps } from './components/table-v2/src/auto-resizer.mjs';
export { tableV2Props } from './components/table-v2/src/table.mjs';
export { tableV2RowProps } from './components/table-v2/src/row.mjs';
export { ElAutoResizer, ElTableV2 } from './components/table-v2/index.mjs';
export { tabsEmits, tabsProps } from './components/tabs/src/tabs.mjs';
export { tabBarProps } from './components/tabs/src/tab-bar.mjs';
export { tabNavEmits, tabNavProps } from './components/tabs/src/tab-nav.mjs';
export { tabPaneProps } from './components/tabs/src/tab-pane.mjs';
export { tabsRootContextKey } from './components/tabs/src/constants.mjs';
export { ElTabPane, ElTabs } from './components/tabs/index.mjs';
export { tagEmits, tagProps } from './components/tag/src/tag.mjs';
export { ElTag } from './components/tag/index.mjs';
export { textProps } from './components/text/src/text2.mjs';
export { ElText } from './components/text/index.mjs';
export { buildTimeList, dateEquals, extractDateFormat, extractTimeFormat, formatter, makeList, parseDate, rangeArr, valueEquals } from './components/time-picker/src/utils.mjs';
export { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER, DEFAULT_FORMATS_TIME, timeUnits } from './components/time-picker/src/constants.mjs';
export { timePickerDefaultProps } from './components/time-picker/src/common/props.mjs';
export { default as CommonPicker } from './components/time-picker/src/common/picker.mjs';
export { default as TimePickPanel } from './components/time-picker/src/time-picker-com/panel-time-pick.mjs';
export { ElTimePicker } from './components/time-picker/index.mjs';
export { ElTimeSelect } from './components/time-select/index.mjs';
export { timelineItemProps } from './components/timeline/src/timeline-item2.mjs';
export { ElTimeline, ElTimelineItem } from './components/timeline/index.mjs';
export { tooltipEmits, useTooltipModelToggle, useTooltipModelToggleEmits, useTooltipModelToggleProps, useTooltipProps } from './components/tooltip/src/tooltip2.mjs';
export { useTooltipTriggerProps } from './components/tooltip/src/trigger.mjs';
export { useTooltipContentProps } from './components/tooltip/src/content2.mjs';
export { TOOLTIP_INJECTION_KEY } from './components/tooltip/src/constants.mjs';
export { ElTooltip } from './components/tooltip/index.mjs';
export { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT, transferCheckedChangeFn, transferEmits, transferProps } from './components/transfer/src/transfer2.mjs';
export { ElTransfer } from './components/transfer/index.mjs';
export { ElTree } from './components/tree/index.mjs';
export { ElTreeSelect } from './components/tree-select/index.mjs';
export { ElTreeV2 } from './components/tree-v2/index.mjs';
export { genFileId, uploadBaseProps, uploadListTypes, uploadProps } from './components/upload/src/upload2.mjs';
export { uploadContentProps } from './components/upload/src/upload-content2.mjs';
export { uploadListEmits, uploadListProps } from './components/upload/src/upload-list.mjs';
export { uploadDraggerEmits, uploadDraggerProps } from './components/upload/src/upload-dragger2.mjs';
export { uploadContextKey } from './components/upload/src/constants.mjs';
export { ElUpload } from './components/upload/index.mjs';
export { default as FixedSizeList } from './components/virtual-list/src/components/fixed-size-list.mjs';
export { default as DynamicSizeList } from './components/virtual-list/src/components/dynamic-size-list.mjs';
export { default as FixedSizeGrid } from './components/virtual-list/src/components/fixed-size-grid.mjs';
export { default as DynamicSizeGrid } from './components/virtual-list/src/components/dynamic-size-grid.mjs';
export { virtualizedGridProps, virtualizedListProps, virtualizedProps, virtualizedScrollbarProps } from './components/virtual-list/src/props.mjs';
export { watermarkProps } from './components/watermark/src/watermark.mjs';
export { ElWatermark } from './components/watermark/index.mjs';
export { tourEmits, tourProps } from './components/tour/src/tour.mjs';
export { ElTour, ElTourStep } from './components/tour/index.mjs';
export { anchorEmits, anchorProps } from './components/anchor/src/anchor2.mjs';
export { ElAnchor, ElAnchorLink } from './components/anchor/index.mjs';
export { ElInfiniteScroll } from './components/infinite-scroll/index.mjs';
export { ElLoading } from './components/loading/index.mjs';
export { vLoading as ElLoadingDirective, vLoading } from './components/loading/src/directive.mjs';
export { Loading as ElLoadingService } from './components/loading/src/service.mjs';
export { messageDefaults, messageEmits, messageProps, messageTypes } from './components/message/src/message2.mjs';
export { ElMessage } from './components/message/index.mjs';
export { ElMessageBox } from './components/message-box/index.mjs';
export { notificationEmits, notificationProps, notificationTypes } from './components/notification/src/notification2.mjs';
export { ElNotification } from './components/notification/index.mjs';
export { popoverEmits, popoverProps } from './components/popover/src/popover.mjs';
export { ElPopover, ElPopoverDirective } from './components/popover/index.mjs';
export { EVENT_CODE } from './constants/aria.mjs';
export { WEEK_DAYS, datePickTypes } from './constants/date.mjs';
export { CHANGE_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from './constants/event.mjs';
export { INSTALLED_KEY } from './constants/key.mjs';
export { componentSizeMap, componentSizes } from './constants/size.mjs';
export { default as ClickOutside } from './directives/click-outside/index.mjs';
export { vRepeatClick } from './directives/repeat-click/index.mjs';
export { default as TrapFocus } from './directives/trap-focus/index.mjs';
export { default as Mousewheel } from './directives/mousewheel/index.mjs';
export { useAttrs } from './hooks/use-attrs/index.mjs';
export { useDeprecated } from './hooks/use-deprecated/index.mjs';
export { useDraggable } from './hooks/use-draggable/index.mjs';
export { useFocus } from './hooks/use-focus/index.mjs';
export { buildLocaleContext, buildTranslator, localeContextKey, translate, useLocale } from './hooks/use-locale/index.mjs';
export { useLockscreen } from './hooks/use-lockscreen/index.mjs';
export { useModal } from './hooks/use-modal/index.mjs';
export { createModelToggleComposable, useModelToggle, useModelToggleEmits, useModelToggleProps } from './hooks/use-model-toggle/index.mjs';
export { usePreventGlobal } from './hooks/use-prevent-global/index.mjs';
export { useProp } from './hooks/use-prop/index.mjs';
export { usePopper } from './hooks/use-popper/index.mjs';
export { useSameTarget } from './hooks/use-same-target/index.mjs';
export { useTeleport } from './hooks/use-teleport/index.mjs';
export { useThrottleRender } from './hooks/use-throttle-render/index.mjs';
export { useTimeout } from './hooks/use-timeout/index.mjs';
export { useTransitionFallthrough, useTransitionFallthroughEmits } from './hooks/use-transition-fallthrough/index.mjs';
export { ID_INJECTION_KEY, useId, useIdInjection } from './hooks/use-id/index.mjs';
export { useEscapeKeydown } from './hooks/use-escape-keydown/index.mjs';
export { usePopperContainer, usePopperContainerId } from './hooks/use-popper-container/index.mjs';
export { useDelayedRender } from './hooks/use-intermediate-render/index.mjs';
export { useDelayedToggle, useDelayedToggleProps } from './hooks/use-delayed-toggle/index.mjs';
export { FORWARD_REF_INJECTION_KEY, useForwardRef, useForwardRefDirective } from './hooks/use-forward-ref/index.mjs';
export { defaultNamespace, namespaceContextKey, useGetDerivedNamespace, useNamespace } from './hooks/use-namespace/index.mjs';
export { ZINDEX_INJECTION_KEY, defaultInitialZIndex, useZIndex, zIndexContextKey } from './hooks/use-z-index/index.mjs';
export { arrowMiddleware, getPositionDataWithUnit, useFloating, useFloatingProps } from './hooks/use-floating/index.mjs';
export { useCursor } from './hooks/use-cursor/index.mjs';
export { useOrderedChildren } from './hooks/use-ordered-children/index.mjs';
export { SIZE_INJECTION_KEY, useGlobalSize, useSizeProp, useSizeProps } from './hooks/use-size/index.mjs';
export { useFocusController } from './hooks/use-focus-controller/index.mjs';

const install = installer.install;
const version = installer.version;

export { install, version };
//# sourceMappingURL=index.mjs.map