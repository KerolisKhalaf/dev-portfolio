# الـ Stage الأول: البناء (Build)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# الـ Stage التاني: التقديم (Serve) باستخدام Nginx
FROM nginx:stable-alpine
# بننقل ملفات الأنجولار لمجلد Nginx
COPY --from=build /app/dist/dev-portfolio/browser /usr/share/nginx/html
# لو عندك إعدادات خاصة للـ Routing في Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]