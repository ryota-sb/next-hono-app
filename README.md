# next-hono-app

Next.js + Hono + Supabase

# prisma setup

1. 初期化

```
npx prisma init
```

2. directUrl を datesouce db に設定

```
directUrl = env("DIRECT_URL")
```

3. schema.prisma にテーブル定義を記載

4. マイグレーション

```
npx prisma migrate dev --name init
```

5. prisma studio 起動

```
npx prisma studio
```

GUI でテーブルの確認が可能
