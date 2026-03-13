/** Generated from Remote JSON Schema for kustomize.toolkit.fluxcd.io.v1.Kustomization */

/**
 * Kustomization is the Schema for the kustomizations API.
 */
export interface KustomizeToolkitFluxcdIoV1Kustomization {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * KustomizationSpec defines the configuration to calculate the desired state
   * from a Source using Kustomize.
   */
  spec?: {
    /**
     * CommonMetadata specifies the common labels and annotations that are
     * applied to all resources. Any existing label or annotation will be
     * overridden if its key matches a common one.
     */
    commonMetadata?: {
      /**
       * Annotations to be added to the object's metadata.
       */
      annotations?: {
        [k: string]: string;
      };
      /**
       * Labels to be added to the object's metadata.
       */
      labels?: {
        [k: string]: string;
      };
      [k: string]: unknown;
    };
    /**
     * Components specifies relative paths to kustomize Components.
     */
    components?: string[];
    /**
     * Decrypt Kubernetes secrets before applying them on the cluster.
     */
    decryption?: {
      /**
       * Provider is the name of the decryption engine.
       */
      provider: 'sops';
      /**
       * The secret name containing the private OpenPGP keys used for decryption.
       * A static credential for a cloud provider defined inside the Secret
       * takes priority to secret-less authentication with the ServiceAccountName
       * field.
       */
      secretRef?: {
        /**
         * Name of the referent.
         */
        name: string;
        [k: string]: unknown;
      };
      /**
       * ServiceAccountName is the name of the service account used to
       * authenticate with KMS services from cloud providers. If a
       * static credential for a given cloud provider is defined
       * inside the Secret referenced by SecretRef, that static
       * credential takes priority.
       */
      serviceAccountName?: string;
      [k: string]: unknown;
    };
    /**
     * DeletionPolicy can be used to control garbage collection when this
     * Kustomization is deleted. Valid values are ('MirrorPrune', 'Delete',
     * 'WaitForTermination', 'Orphan'). 'MirrorPrune' mirrors the Prune field
     * (orphan if false, delete if true). Defaults to 'MirrorPrune'.
     */
    deletionPolicy?: 'MirrorPrune' | 'Delete' | 'WaitForTermination' | 'Orphan';
    /**
     * DependsOn may contain a DependencyReference slice
     * with references to Kustomization resources that must be ready before this
     * Kustomization can be reconciled.
     */
    dependsOn?: {
      /**
       * Name of the referent.
       */
      name: string;
      /**
       * Namespace of the referent, defaults to the namespace of the Kustomization
       * resource object that contains the reference.
       */
      namespace?: string;
      /**
       * ReadyExpr is a CEL expression that can be used to assess the readiness
       * of a dependency. When specified, the built-in readiness check
       * is replaced by the logic defined in the CEL expression.
       * To make the CEL expression additive to the built-in readiness check,
       * the feature gate `AdditiveCELDependencyCheck` must be set to `true`.
       */
      readyExpr?: string;
      [k: string]: unknown;
    }[];
    /**
     * Force instructs the controller to recreate resources
     * when patching fails due to an immutable field change.
     */
    force?: boolean;
    /**
     * HealthCheckExprs is a list of healthcheck expressions for evaluating the
     * health of custom resources using Common Expression Language (CEL).
     * The expressions are evaluated only when Wait or HealthChecks are specified.
     */
    healthCheckExprs?: {
      /**
       * APIVersion of the custom resource under evaluation.
       */
      apiVersion: string;
      /**
       * Current is the CEL expression that determines if the status
       * of the custom resource has reached the desired state.
       */
      current: string;
      /**
       * Failed is the CEL expression that determines if the status
       * of the custom resource has failed to reach the desired state.
       */
      failed?: string;
      /**
       * InProgress is the CEL expression that determines if the status
       * of the custom resource has not yet reached the desired state.
       */
      inProgress?: string;
      /**
       * Kind of the custom resource under evaluation.
       */
      kind: string;
      [k: string]: unknown;
    }[];
    /**
     * A list of resources to be included in the health assessment.
     */
    healthChecks?: {
      /**
       * API version of the referent, if not specified the Kubernetes preferred version will be used.
       */
      apiVersion?: string;
      /**
       * Kind of the referent.
       */
      kind: string;
      /**
       * Name of the referent.
       */
      name: string;
      /**
       * Namespace of the referent, when not specified it acts as LocalObjectReference.
       */
      namespace?: string;
      [k: string]: unknown;
    }[];
    /**
     * IgnoreMissingComponents instructs the controller to ignore Components paths
     * not found in source by removing them from the generated kustomization.yaml
     * before running kustomize build.
     */
    ignoreMissingComponents?: boolean;
    /**
     * Images is a list of (image name, new name, new tag or digest)
     * for changing image names, tags or digests. This can also be achieved with a
     * patch, but this operator is simpler to specify.
     */
    images?: {
      /**
       * Digest is the value used to replace the original image tag.
       * If digest is present NewTag value is ignored.
       */
      digest?: string;
      /**
       * Name is a tag-less image name.
       */
      name: string;
      /**
       * NewName is the value used to replace the original name.
       */
      newName?: string;
      /**
       * NewTag is the value used to replace the original tag.
       */
      newTag?: string;
      [k: string]: unknown;
    }[];
    /**
     * The interval at which to reconcile the Kustomization.
     * This interval is approximate and may be subject to jitter to ensure
     * efficient use of resources.
     */
    interval: string;
    /**
     * The KubeConfig for reconciling the Kustomization on a remote cluster.
     * When used in combination with KustomizationSpec.ServiceAccountName,
     * forces the controller to act on behalf of that Service Account at the
     * target cluster.
     * If the --default-service-account flag is set, its value will be used as
     * a controller level fallback for when KustomizationSpec.ServiceAccountName
     * is empty.
     */
    kubeConfig?: {
      /**
       * ConfigMapRef holds an optional name of a ConfigMap that contains
       * the following keys:
       *
       * - `provider`: the provider to use. One of `aws`, `azure`, `gcp`, or
       *    `generic`. Required.
       * - `cluster`: the fully qualified resource name of the Kubernetes
       *    cluster in the cloud provider API. Not used by the `generic`
       *    provider. Required when one of `address` or `ca.crt` is not set.
       * - `address`: the address of the Kubernetes API server. Required
       *    for `generic`. For the other providers, if not specified, the
       *    first address in the cluster resource will be used, and if
       *    specified, it must match one of the addresses in the cluster
       *    resource.
       *    If audiences is not set, will be used as the audience for the
       *    `generic` provider.
       * - `ca.crt`: the optional PEM-encoded CA certificate for the
       *    Kubernetes API server. If not set, the controller will use the
       *    CA certificate from the cluster resource.
       * - `audiences`: the optional audiences as a list of
       *    line-break-separated strings for the Kubernetes ServiceAccount
       *    token. Defaults to the `address` for the `generic` provider, or
       *    to specific values for the other providers depending on the
       *    provider.
       * -  `serviceAccountName`: the optional name of the Kubernetes
       *    ServiceAccount in the same namespace that should be used
       *    for authentication. If not specified, the controller
       *    ServiceAccount will be used.
       *
       * Mutually exclusive with SecretRef.
       */
      configMapRef?: {
        /**
         * Name of the referent.
         */
        name: string;
        [k: string]: unknown;
      };
      /**
       * SecretRef holds an optional name of a secret that contains a key with
       * the kubeconfig file as the value. If no key is set, the key will default
       * to 'value'. Mutually exclusive with ConfigMapRef.
       * It is recommended that the kubeconfig is self-contained, and the secret
       * is regularly updated if credentials such as a cloud-access-token expire.
       * Cloud specific `cmd-path` auth helpers will not function without adding
       * binaries and credentials to the Pod that is responsible for reconciling
       * Kubernetes resources. Supported only for the generic provider.
       */
      secretRef?: {
        /**
         * Key in the Secret, when not specified an implementation-specific default key is used.
         */
        key?: string;
        /**
         * Name of the Secret.
         */
        name: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * NamePrefix will prefix the names of all managed resources.
     */
    namePrefix?: string;
    /**
     * NameSuffix will suffix the names of all managed resources.
     */
    nameSuffix?: string;
    /**
     * Strategic merge and JSON patches, defined as inline YAML objects,
     * capable of targeting objects based on kind, label and annotation selectors.
     */
    patches?: {
      /**
       * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with
       * an array of operation objects.
       */
      patch: string;
      /**
       * Target points to the resources that the patch document should be applied to.
       */
      target?: {
        /**
         * AnnotationSelector is a string that follows the label selection expression
         * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
         * It matches with the resource annotations.
         */
        annotationSelector?: string;
        /**
         * Group is the API group to select resources from.
         * Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources.
         * https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        group?: string;
        /**
         * Kind of the API Group to select resources from.
         * Together with Group and Version it is capable of unambiguously
         * identifying and/or selecting resources.
         * https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        kind?: string;
        /**
         * LabelSelector is a string that follows the label selection expression
         * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
         * It matches with the resource labels.
         */
        labelSelector?: string;
        /**
         * Name to match resources with.
         */
        name?: string;
        /**
         * Namespace to select resources from.
         */
        namespace?: string;
        /**
         * Version of the API Group to select resources from.
         * Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources.
         * https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        version?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    /**
     * Path to the directory containing the kustomization.yaml file, or the
     * set of plain YAMLs a kustomization.yaml should be generated for.
     * Defaults to 'None', which translates to the root path of the SourceRef.
     */
    path?: string;
    /**
     * PostBuild describes which actions to perform on the YAML manifest
     * generated by building the kustomize overlay.
     */
    postBuild?: {
      /**
       * Substitute holds a map of key/value pairs.
       * The variables defined in your YAML manifests that match any of the keys
       * defined in the map will be substituted with the set value.
       * Includes support for bash string replacement functions
       * e.g. ${var:=default}, ${var:position} and ${var/substring/replacement}.
       */
      substitute?: {
        [k: string]: string;
      };
      /**
       * SubstituteFrom holds references to ConfigMaps and Secrets containing
       * the variables and their values to be substituted in the YAML manifests.
       * The ConfigMap and the Secret data keys represent the var names, and they
       * must match the vars declared in the manifests for the substitution to
       * happen.
       */
      substituteFrom?: {
        /**
         * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
         */
        kind: 'Secret' | 'ConfigMap';
        /**
         * Name of the values referent. Should reside in the same namespace as the
         * referring resource.
         */
        name: string;
        /**
         * Optional indicates whether the referenced resource must exist, or whether to
         * tolerate its absence. If true and the referenced resource is absent, proceed
         * as if the resource was present but empty, without any variables defined.
         */
        optional?: boolean;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * Prune enables garbage collection.
     */
    prune: boolean;
    /**
     * The interval at which to retry a previously failed reconciliation.
     * When not specified, the controller uses the KustomizationSpec.Interval
     * value to retry failures.
     */
    retryInterval?: string;
    /**
     * The name of the Kubernetes service account to impersonate
     * when reconciling this Kustomization.
     */
    serviceAccountName?: string;
    /**
     * Reference of the source where the kustomization file is.
     */
    sourceRef: {
      /**
       * API version of the referent.
       */
      apiVersion?: string;
      /**
       * Kind of the referent.
       */
      kind: 'OCIRepository' | 'GitRepository' | 'Bucket' | 'ExternalArtifact';
      /**
       * Name of the referent.
       */
      name: string;
      /**
       * Namespace of the referent, defaults to the namespace of the Kubernetes
       * resource object that contains the reference.
       */
      namespace?: string;
      [k: string]: unknown;
    };
    /**
     * This flag tells the controller to suspend subsequent kustomize executions,
     * it does not apply to already started executions. Defaults to false.
     */
    suspend?: boolean;
    /**
     * TargetNamespace sets or overrides the namespace in the
     * kustomization.yaml file.
     */
    targetNamespace?: string;
    /**
     * Timeout for validation, apply and health checking operations.
     * Defaults to 'Interval' duration.
     */
    timeout?: string;
    /**
     * Wait instructs the controller to check the health of all the reconciled
     * resources. When enabled, the HealthChecks are ignored. Defaults to false.
     */
    wait?: boolean;
    [k: string]: unknown;
  };
  /**
   * KustomizationStatus defines the observed state of a kustomization.
   */
  status?: {
    conditions?: {
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another.
       * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      lastTransitionTime: string;
      /**
       * message is a human readable message indicating details about the transition.
       * This may be an empty string.
       */
      message: string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon.
       * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
       * with respect to the current state of the instance.
       */
      observedGeneration?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition.
       * Producers of specific condition types may define expected values and meanings for this field,
       * and whether the values are considered a guaranteed API.
       * The value should be a CamelCase string.
       * This field may not be empty.
       */
      reason: string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      status: 'True' | 'False' | 'Unknown';
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase.
       */
      type: string;
      [k: string]: unknown;
    }[];
    /**
     * History contains a set of snapshots of the last reconciliation attempts
     * tracking the revision, the state and the duration of each attempt.
     */
    history?: {
      /**
       * Digest is the checksum in the format `<algo>:<hex>` of the resources in this snapshot.
       */
      digest: string;
      /**
       * FirstReconciled is the time when this revision was first reconciled to the cluster.
       */
      firstReconciled: string;
      /**
       * LastReconciled is the time when this revision was last reconciled to the cluster.
       */
      lastReconciled: string;
      /**
       * LastReconciledDuration is time it took to reconcile the resources in this revision.
       */
      lastReconciledDuration: string;
      /**
       * LastReconciledStatus is the status of the last reconciliation.
       */
      lastReconciledStatus: string;
      /**
       * Metadata contains additional information about the snapshot.
       */
      metadata?: {
        [k: string]: string;
      };
      /**
       * TotalReconciliations is the total number of reconciliations that have occurred for this snapshot.
       */
      totalReconciliations: number;
      [k: string]: unknown;
    }[];
    /**
     * Inventory contains the list of Kubernetes resource object references that
     * have been successfully applied.
     */
    inventory?: {
      /**
       * Entries of Kubernetes resource object references.
       */
      entries: {
        /**
         * ID is the string representation of the Kubernetes resource object's metadata,
         * in the format '<namespace>_<name>_<group>_<kind>'.
         */
        id: string;
        /**
         * Version is the API version of the Kubernetes resource object's kind.
         */
        v: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * The last successfully applied origin revision.
     * Equals the origin revision of the applied Artifact from the referenced Source.
     * Usually present on the Metadata of the applied Artifact and depends on the
     * Source type, e.g. for OCI it's the value associated with the key
     * "org.opencontainers.image.revision".
     */
    lastAppliedOriginRevision?: string;
    /**
     * The last successfully applied revision.
     * Equals the Revision of the applied Artifact from the referenced Source.
     */
    lastAppliedRevision?: string;
    /**
     * LastAttemptedRevision is the revision of the last reconciliation attempt.
     */
    lastAttemptedRevision?: string;
    /**
     * LastHandledReconcileAt holds the value of the most recent
     * reconcile request value, so a change of the annotation value
     * can be detected.
     */
    lastHandledReconcileAt?: string;
    /**
     * ObservedGeneration is the last reconciled generation.
     */
    observedGeneration?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
