const HushhTechFaqSheet: React.FC<HushhTechFaqSheetProps> = ({
  isOpen,
  onClose,
}) => {
  const [expandedIdx, setExpandedIdx] = useState<string | null>(null);

  // Updated typing fix
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);

  const sheetRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const instanceId = useId();

  useEffect(() => {
    let frameId: number | undefined;

    if (isOpen) {
      frameId = requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }

    return () => {
      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleToggle = useCallback((key: string) => {
    setExpandedIdx((prev) => (prev === key ? null : key));
  }, []);

  const handleBackdropClick = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useModalKeyboardNavigation({
    isOpen,
    containerRef: sheetRef,
    initialFocusRef: closeButtonRef,
    onClose: handleBackdropClick,
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hushh-tech-faq-title"
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
      />

      <div
        ref={sheetRef}
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] flex flex-col transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        aria-labelledby="hushh-tech-faq-title"
        tabIndex={-1}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        <div className="px-6 pt-2 pb-4 flex items-center justify-between border-b border-gray-100">
          <h2
            id="hushh-tech-faq-title"
            className="text-2xl font-normal text-black font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked{" "}
            <span className="text-gray-400 italic font-light">
              Questions
            </span>
          </h2>

          <button
            ref={closeButtonRef}
            onClick={handleBackdropClick}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Close FAQs"
          >
            <span
              className="material-symbols-outlined text-gray-600 text-lg"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              close
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-10 scrollbar-thin">
          {FAQ_DATA.map((category) => (
            <section key={category.title} className="mt-6">
              <h3 className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-3 font-medium">
                {category.title}
              </h3>

              <div className="border border-gray-200 divide-y divide-gray-100">
                {category.items.map((item, idx) => {
                  const key = getFaqItemKey(category.title, idx);
                  const panelId = `faq-panel-${instanceId}-${key}`;
                  const triggerId = `faq-trigger-${instanceId}-${key}`;

                  const isExpanded = expandedIdx === key;

                  return (
                    <div key={key}>
                      <button
                        id={triggerId}
                        onClick={() => handleToggle(key)}
                        className="w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hushh-blue"
                        aria-expanded={isExpanded}
                        aria-controls={panelId}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                          <span
                            className="material-symbols-outlined text-gray-600 text-sm"
                            style={{ fontVariationSettings: "'wght' 300" }}
                          >
                            help
                          </span>
                        </div>

                        <span className="flex-1 text-sm font-medium text-gray-900">
                          {item.q}
                        </span>

                        <span
                          className={`material-symbols-outlined text-gray-400 text-lg transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          style={{ fontVariationSettings: "'wght' 300" }}
                        >
                          expand_more
                        </span>
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        aria-hidden={!isExpanded}
                        className={`overflow-hidden transition-all duration-200 ease-out ${
                          isExpanded
                            ? "max-h-60 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="px-4 pb-4 pl-[60px] text-sm text-gray-500 font-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <div className="mt-8 mb-4 flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-1.5">
              <span
                className="material-symbols-outlined text-hushh-blue text-sm"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                support_agent
              </span>

              <span className="text-[11px] text-gray-500">
                Need more help?
              </span>
            </div>

            <a
              href="mailto:support@hushh.ai"
              className="text-xs font-semibold text-hushh-blue hover:underline"
            >
              support@hushh.ai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HushhTechFaqSheet;