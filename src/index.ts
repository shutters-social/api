import { Service } from "@shutters/shutterkit";
import { health } from "./api";

class ApiService extends Service {
	protected setup() {
		super.setup();

    this.app.route('/', health.createRouter());
	}
}

const svc = new ApiService();
svc.start();
