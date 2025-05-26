

export function distanceToPoFRotationAxis(focalLengthMillimeters: number, lensTiltRadians: number) {
    const J = focalLengthMillimeters / (Math.sin(lensTiltRadians));
    if (isNaN(J)) return 0;
    return J;
}

export function angleFromImageToPoF(lengthFromImageToCenterOfLensMillimeters: number, focalLengthMillimeters: number, lensTiltRadians: number) {
    const tanOfAngle = (lengthFromImageToCenterOfLensMillimeters / ((lengthFromImageToCenterOfLensMillimeters * Math.cos(lensTiltRadians)) - focalLengthMillimeters)) * Math.sin(lensTiltRadians);
    const angle = Math.atan(tanOfAngle);
    if (isNaN(angle)) return 0;
    return angle;
}

export function angleFromImageToPoF2(lengthFromCenterOfLensToPoFMillimeters: number, focalLengthMillimeters: number, lensTiltRadians: number) {
    const tanOfAngle = (lengthFromCenterOfLensToPoFMillimeters / focalLengthMillimeters) * Math.sin(lensTiltRadians);
    return Math.atan(tanOfAngle);
}

