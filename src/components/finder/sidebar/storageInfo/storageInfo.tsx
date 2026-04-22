import "./storage.css";

interface StorageInfoProps {
  used: number; // in GB
  total: number; // in GB or TB (your choice)
}

function StorageInfo({ used, total }: StorageInfoProps) {
  const percent = Math.round((used / total) * 100);

  return (
     <div className="storage-container">
      <div className="storage-header">
        <span className="storage-title">STORAGE</span>
        <span className="storage-percent">{percent}%</span>
      </div>

      <div className="storage-bar-wrapper">
        <div
          className="storage-bar-fill"
          style={{ width: `${percent}%` }}
        />
      </div>

      <span className="storage-text">
        {used} GB of {total} GB used
      </span>
    </div>
  );
}

export default StorageInfo;
