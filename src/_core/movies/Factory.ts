import { Repository } from './Repository';
import { Repository as RepositoryInterface } from './types';

export class Factory {
    static build<T>(useCase: new (repository: RepositoryInterface) => T) {
        const repository = new Repository();
        return new useCase(repository);
    }
}

export class FactoryRepository {
    static build() {
        return new Repository();
    }
}
