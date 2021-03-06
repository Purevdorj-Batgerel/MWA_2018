Q1.
db.zips.aggregate([{
    $match: {
        state: "IA"
    }
}, {
    $project: {
        "_id": 0,
        "zipcode": "$_id"
    }
}])

Q2.
db.zips.aggregate([{
    $match: {
        pop: {
            $gt: 1000
        }
    }
}, {
    $project: {
        "_id": 0,
        "zipcode": "$_id"
    }
}])

Q3.
db.zips.aggregate([{
    $group: {
        _id: {
            city: "$city",
            state: "$state"
        },
        zipCount: {
            $sum: 1
        }
    }
}, {
    $match: {
        zipCount: {
            $gt: 1
        }
    }
}, {
    $project: {
        _id: 0,
        city: "$_id.city",
        state: "$_id.state"
    }
}, {
    $sort: {
        state: 1,
        city: 1
    }
}]);

Q4.
db.zips.aggregate([{
    $group: {
        _id: {
            state: "$state",
            city: "$city"
        },
        pop: {
            $sum: "$pop"
        }
    }
}, {
    $sort: {
        "_id.state": 1,
        "pop": 1
    }
}, {
    $group: {
        _id: "$_id.state",
        city: {
            $first: "$_id.city"
        },
        pop: {
            $first: "$pop"
        }
    }
}]);