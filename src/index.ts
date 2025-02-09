import { Service } from "@shutters/shutterkit";

class ApiService extends Service {
	protected setup() {
		super.setup();

		this.app.get("/_health", (c) => c.text("OK"));
	}
}

const svc = new ApiService();
svc.start();
