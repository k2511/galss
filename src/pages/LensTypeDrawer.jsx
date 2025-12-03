import { useEffect } from "react";

export default function LensTypeDrawer({
  open,
  onClose,
  lensOptions = [],
  selectedLens,
  onSelect,
}) {
  // Close drawer on ESC key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-[380px] bg-white h-full shadow-xl animate-slide-left p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold">Select Lens Type</h2>
          <button
            className="text-gray-600 hover:text-black text-lg"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {lensOptions.map((lens, index) => (
            <button
              key={index}
              className={`border rounded-xl p-4 text-left hover:bg-gray-100 transition 
              ${selectedLens?.id === lens.id ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
              onClick={() => onSelect(lens)}
            >
              <p className="font-semibold">{lens.name}</p>
              <p className="text-sm text-gray-600">₹{lens.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}