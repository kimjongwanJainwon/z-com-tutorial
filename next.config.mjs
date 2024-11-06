/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 추가 설정
}

// CommonJS 구문 (오류 발생)
// module.exports = nextConfig;

// ECMAScript 모듈 구문 (올바른 방식)
export default nextConfig;