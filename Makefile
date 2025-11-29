migration-add:
	@if [ -z "$(name)" ]; then \
		echo "❌ Please provide migration name using 'make migration-add name=your_migration_name'"; \
	else \
		migrate create -ext sql -dir $(MIGRATIONS_DIR) $(name); \
	fi

migration-run:
	migrate -path $(MIGRATIONS_DIR) -database "$(DB_URL)" up

migration-down:
	migrate -path $(MIGRATIONS_DIR) -database "$(DB_URL)" down 1

migration-force:
	@read -p "Enter version to force: " version; \
	migrate -path $(MIGRATIONS_DIR) -database "$(DB_URL)" force $$version

migration-status:
	migrate -path $(MIGRATIONS_DIR) -database "$(DB_URL)" version
