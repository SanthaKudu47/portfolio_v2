import "./finderFooter.css";

interface FinderFooterProps {
  items: number;
  size: number; // size in bytes
}

function FinderFooter({ items, size }: FinderFooterProps) {
  function formatSize(bytes: number) {
    const kb = bytes / 1024;
    const mb = kb / 1024;
    const gb = mb / 1024;

    if (gb >= 1) return `${gb.toFixed(1)} GB`;
    if (mb >= 1) return `${mb.toFixed(1)} MB`;
    return `${Math.round(kb)} KB`;
  }

  return (
    <div className="finder-footer">
      <span className="finder-footer-items">{items} Items</span>
      <span className="finder-footer-size">{formatSize(size)}</span>
    </div>
  );
}

export default FinderFooter;
