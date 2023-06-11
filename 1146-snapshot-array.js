var SnapshotArray = function(length) {
    this.snap_id = 0;
    this.array = new Array(length);
    for (let i = 0; i < length; i++) {
        this.array[i] = [[0, 0]];
    }
};

SnapshotArray.prototype.set = function(index, val) {
    this.array[index].push([this.snap_id, val]);
};

SnapshotArray.prototype.snap = function() {
    return this.snap_id++;
};

SnapshotArray.prototype.get = function(index, snap_id) {
    let snapshots = this.array[index];
    
    for (let i = snapshots.length - 1; i >= 0; i--) {
        let snapshot = snapshots[i];
        let id = snapshot[0];
        let val = snapshot[1];
        
        if (id <= snap_id) {
            return val;
        }
    }
    
    return 0;
};