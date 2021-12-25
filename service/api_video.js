import zzrequest from "./index"

export function getTopMV(offset, limit = 10) {
    return zzrequest.get("/top/mv", {
        offset,
        limit
    })
}