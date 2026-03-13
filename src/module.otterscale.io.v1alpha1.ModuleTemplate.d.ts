/** Generated from Remote JSON Schema for module.otterscale.io.v1alpha1.ModuleTemplate */

/**
 * ModuleTemplate is the Schema for the moduletemplates API.
 * A ModuleTemplate defines a reusable platform module blueprint containing either
 * a FluxCD HelmRelease or Kustomization specification. Users create Module CRs
 * to instantiate and deploy modules from these templates.
 */
export interface ModuleOtterscaleIoV1Alpha1ModuleTemplate {
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
   * Spec defines the desired behavior of the ModuleTemplate.
   */
  spec: {
    /**
     * Description is a human-readable description of the module template.
     */
    description?: string;
    /**
     * HelmReleaseSpec defines the desired state of a Helm release.
     */
    helmRelease?: {
      /**
       * Chart defines the template of the v1.HelmChart that should be created
       * for this HelmRelease.
       */
      chart?: {
        /**
         * ObjectMeta holds the template for metadata like labels and annotations.
         */
        metadata?: {
          /**
           * Annotations is an unstructured key value map stored with a resource that may be
           * set by external tools to store and retrieve arbitrary metadata. They are not
           * queryable and should be preserved when modifying objects.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
           */
          annotations?: {
            [k: string]: string;
          };
          /**
           * Map of string keys and values that can be used to organize and categorize
           * (scope and select) objects.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
           */
          labels?: {
            [k: string]: string;
          };
          [k: string]: unknown;
        };
        /**
         * Spec holds the template for the v1.HelmChartSpec for this HelmRelease.
         */
        spec: {
          /**
           * The name or path the Helm chart is available at in the SourceRef.
           */
          chart: string;
          /**
           * IgnoreMissingValuesFiles controls whether to silently ignore missing values files rather than failing.
           */
          ignoreMissingValuesFiles?: boolean;
          /**
           * Interval at which to check the v1.Source for updates. Defaults to
           * 'HelmReleaseSpec.Interval'.
           */
          interval?: string;
          /**
           * Determines what enables the creation of a new artifact. Valid values are
           * ('ChartVersion', 'Revision').
           * See the documentation of the values for an explanation on their behavior.
           * Defaults to ChartVersion when omitted.
           */
          reconcileStrategy?: 'ChartVersion' | 'Revision';
          /**
           * The name and namespace of the v1.Source the chart is available at.
           */
          sourceRef: {
            /**
             * APIVersion of the referent.
             */
            apiVersion?: string;
            /**
             * Kind of the referent.
             */
            kind: 'HelmRepository' | 'GitRepository' | 'Bucket';
            /**
             * Name of the referent.
             */
            name: string;
            /**
             * Namespace of the referent.
             */
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * Alternative list of values files to use as the chart values (values.yaml
           * is not included by default), expected to be a relative path in the SourceRef.
           * Values files are merged in the order of this list with the last file overriding
           * the first. Ignored when omitted.
           */
          valuesFiles?: string[];
          /**
           * Verify contains the secret name containing the trusted public keys
           * used to verify the signature and specifies which provider to use to check
           * whether OCI image is authentic.
           * This field is only supported for OCI sources.
           * Chart dependencies, which are not bundled in the umbrella chart artifact,
           * are not verified.
           */
          verify?: {
            /**
             * Provider specifies the technology used to sign the OCI Helm chart.
             */
            provider: 'cosign' | 'notation';
            /**
             * SecretRef specifies the Kubernetes Secret containing the
             * trusted public keys.
             */
            secretRef?: {
              /**
               * Name of the referent.
               */
              name: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          /**
           * Version semver expression, ignored for charts from v1.GitRepository and
           * v1beta2.Bucket sources. Defaults to latest when omitted.
           */
          version?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * ChartRef holds a reference to a source controller resource containing the
       * Helm chart artifact.
       */
      chartRef?: {
        /**
         * APIVersion of the referent.
         */
        apiVersion?: string;
        /**
         * Kind of the referent.
         */
        kind: 'OCIRepository' | 'HelmChart' | 'ExternalArtifact';
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
       * DependsOn may contain a DependencyReference slice with
       * references to HelmRelease resources that must be ready before this HelmRelease
       * can be reconciled.
       */
      dependsOn?: {
        /**
         * Name of the referent.
         */
        name: string;
        /**
         * Namespace of the referent, defaults to the namespace of the HelmRelease
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
       * DriftDetection holds the configuration for detecting and handling
       * differences between the manifest in the Helm storage and the resources
       * currently existing in the cluster.
       */
      driftDetection?: {
        /**
         * Ignore contains a list of rules for specifying which changes to ignore
         * during diffing.
         */
        ignore?: {
          /**
           * Paths is a list of JSON Pointer (RFC 6901) paths to be excluded from
           * consideration in a Kubernetes object.
           */
          paths: string[];
          /**
           * Target is a selector for specifying Kubernetes objects to which this
           * rule applies.
           * If Target is not set, the Paths will be ignored for all Kubernetes
           * objects within the manifest of the Helm release.
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
         * Mode defines how differences should be handled between the Helm manifest
         * and the manifest currently applied to the cluster.
         * If not explicitly set, it defaults to DiffModeDisabled.
         */
        mode?: 'enabled' | 'warn' | 'disabled';
        [k: string]: unknown;
      };
      /**
       * HealthCheckExprs is a list of healthcheck expressions for evaluating the
       * health of custom resources using Common Expression Language (CEL).
       * The expressions are evaluated only when the specific Helm action
       * taking place has wait enabled, i.e. DisableWait is false, and the
       * 'poller' WaitStrategy is used.
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
       * Install holds the configuration for Helm install actions for this HelmRelease.
       */
      install?: {
        /**
         * CRDs upgrade CRDs from the Helm Chart's crds directory according
         * to the CRD upgrade policy provided here. Valid values are `Skip`,
         * `Create` or `CreateReplace`. Default is `Create` and if omitted
         * CRDs are installed but not updated.
         *
         * Skip: do neither install nor replace (update) any CRDs.
         *
         * Create: new CRDs are created, existing CRDs are neither updated nor deleted.
         *
         * CreateReplace: new CRDs are created, existing CRDs are updated (replaced)
         * but not deleted.
         *
         * By default, CRDs are applied (installed) during Helm install action.
         * With this option users can opt in to CRD replace existing CRDs on Helm
         * install actions, which is not (yet) natively supported by Helm.
         * https://helm.sh/docs/chart_best_practices/custom_resource_definitions.
         */
        crds?: 'Skip' | 'Create' | 'CreateReplace';
        /**
         * CreateNamespace tells the Helm install action to create the
         * HelmReleaseSpec.TargetNamespace if it does not exist yet.
         * On uninstall, the namespace will not be garbage collected.
         */
        createNamespace?: boolean;
        /**
         * DisableHooks prevents hooks from running during the Helm install action.
         */
        disableHooks?: boolean;
        /**
         * DisableOpenAPIValidation prevents the Helm install action from validating
         * rendered templates against the Kubernetes OpenAPI Schema.
         */
        disableOpenAPIValidation?: boolean;
        /**
         * DisableSchemaValidation prevents the Helm install action from validating
         * the values against the JSON Schema.
         */
        disableSchemaValidation?: boolean;
        /**
         * DisableTakeOwnership disables taking ownership of existing resources
         * during the Helm install action. Defaults to false.
         */
        disableTakeOwnership?: boolean;
        /**
         * DisableWait disables the waiting for resources to be ready after a Helm
         * install has been performed.
         */
        disableWait?: boolean;
        /**
         * DisableWaitForJobs disables waiting for jobs to complete after a Helm
         * install has been performed.
         */
        disableWaitForJobs?: boolean;
        /**
         * Remediation holds the remediation configuration for when the Helm install
         * action for the HelmRelease fails. The default is to not perform any action.
         */
        remediation?: {
          /**
           * IgnoreTestFailures tells the controller to skip remediation when the Helm
           * tests are run after an install action but fail. Defaults to
           * 'Test.IgnoreFailures'.
           */
          ignoreTestFailures?: boolean;
          /**
           * RemediateLastFailure tells the controller to remediate the last failure, when
           * no retries remain. Defaults to 'false'.
           */
          remediateLastFailure?: boolean;
          /**
           * Retries is the number of retries that should be attempted on failures before
           * bailing. Remediation, using an uninstall, is performed between each attempt.
           * Defaults to '0', a negative integer equals to unlimited retries.
           */
          retries?: number;
          [k: string]: unknown;
        };
        /**
         * Replace tells the Helm install action to re-use the 'ReleaseName', but only
         * if that name is a deleted release which remains in the history.
         */
        replace?: boolean;
        /**
         * ServerSideApply enables server-side apply for resources during install.
         * Defaults to true (or false when UseHelm3Defaults feature gate is enabled).
         */
        serverSideApply?: boolean;
        /**
         * SkipCRDs tells the Helm install action to not install any CRDs. By default,
         * CRDs are installed if not already present.
         *
         * Deprecated use CRD policy (`crds`) attribute with value `Skip` instead.
         */
        skipCRDs?: boolean;
        /**
         * Strategy defines the install strategy to use for this HelmRelease.
         * Defaults to 'RemediateOnFailure'.
         */
        strategy?: {
          /**
           * Name of the install strategy.
           */
          name: 'RemediateOnFailure' | 'RetryOnFailure';
          /**
           * RetryInterval is the interval at which to retry a failed install.
           * Can be used only when Name is set to RetryOnFailure.
           * Defaults to '5m'.
           */
          retryInterval?: string;
          [k: string]: unknown;
        };
        /**
         * Timeout is the time to wait for any individual Kubernetes operation (like
         * Jobs for hooks) during the performance of a Helm install action. Defaults to
         * 'HelmReleaseSpec.Timeout'.
         */
        timeout?: string;
        [k: string]: unknown;
      };
      /**
       * Interval at which to reconcile the Helm release.
       */
      interval: string;
      /**
       * KubeConfig for reconciling the HelmRelease on a remote cluster.
       * When used in combination with HelmReleaseSpec.ServiceAccountName,
       * forces the controller to act on behalf of that Service Account at the
       * target cluster.
       * If the --default-service-account flag is set, its value will be used as
       * a controller level fallback for when HelmReleaseSpec.ServiceAccountName
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
       * MaxHistory is the number of revisions saved by Helm for this HelmRelease.
       * Use '0' for an unlimited number of revisions; defaults to '5'.
       */
      maxHistory?: number;
      /**
       * PersistentClient tells the controller to use a persistent Kubernetes
       * client for this release. When enabled, the client will be reused for the
       * duration of the reconciliation, instead of being created and destroyed
       * for each (step of a) Helm action.
       *
       * This can improve performance, but may cause issues with some Helm charts
       * that for example do create Custom Resource Definitions during installation
       * outside Helm's CRD lifecycle hooks, which are then not observed to be
       * available by e.g. post-install hooks.
       *
       * If not set, it defaults to true.
       */
      persistentClient?: boolean;
      /**
       * PostRenderers holds an array of Helm PostRenderers, which will be applied in order
       * of their definition.
       */
      postRenderers?: {
        /**
         * Kustomization to apply as PostRenderer.
         */
        kustomize?: {
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
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * ReleaseName used for the Helm release. Defaults to a composition of
       * '[TargetNamespace-]Name'.
       */
      releaseName?: string;
      /**
       * Rollback holds the configuration for Helm rollback actions for this HelmRelease.
       */
      rollback?: {
        /**
         * CleanupOnFail allows deletion of new resources created during the Helm
         * rollback action when it fails.
         */
        cleanupOnFail?: boolean;
        /**
         * DisableHooks prevents hooks from running during the Helm rollback action.
         */
        disableHooks?: boolean;
        /**
         * DisableWait disables the waiting for resources to be ready after a Helm
         * rollback has been performed.
         */
        disableWait?: boolean;
        /**
         * DisableWaitForJobs disables waiting for jobs to complete after a Helm
         * rollback has been performed.
         */
        disableWaitForJobs?: boolean;
        /**
         * Force forces resource updates through a replacement strategy.
         */
        force?: boolean;
        /**
         * Recreate performs pod restarts for any managed workloads.
         *
         * Deprecated: This behavior was deprecated in Helm 3:
         *   - Deprecation: https://github.com/helm/helm/pull/6463
         *   - Removal: https://github.com/helm/helm/pull/31023
         * After helm-controller was upgraded to the Helm 4 SDK,
         * this field is no longer functional and will print a
         * warning if set to true. It will also be removed in a
         * future release.
         */
        recreate?: boolean;
        /**
         * ServerSideApply enables server-side apply for resources during rollback.
         * Can be "enabled", "disabled", or "auto".
         * When "auto", server-side apply usage will be based on the release's previous usage.
         * Defaults to "auto".
         */
        serverSideApply?: 'enabled' | 'disabled' | 'auto';
        /**
         * Timeout is the time to wait for any individual Kubernetes operation (like
         * Jobs for hooks) during the performance of a Helm rollback action. Defaults to
         * 'HelmReleaseSpec.Timeout'.
         */
        timeout?: string;
        [k: string]: unknown;
      };
      /**
       * The name of the Kubernetes service account to impersonate
       * when reconciling this HelmRelease.
       */
      serviceAccountName?: string;
      /**
       * StorageNamespace used for the Helm storage.
       * Defaults to the namespace of the HelmRelease.
       */
      storageNamespace?: string;
      /**
       * Suspend tells the controller to suspend reconciliation for this HelmRelease,
       * it does not apply to already started reconciliations. Defaults to false.
       */
      suspend?: boolean;
      /**
       * TargetNamespace to target when performing operations for the HelmRelease.
       * Defaults to the namespace of the HelmRelease.
       */
      targetNamespace?: string;
      /**
       * Test holds the configuration for Helm test actions for this HelmRelease.
       */
      test?: {
        /**
         * Enable enables Helm test actions for this HelmRelease after an Helm install
         * or upgrade action has been performed.
         */
        enable?: boolean;
        /**
         * Filters is a list of tests to run or exclude from running.
         */
        filters?: {
          /**
           * Exclude specifies whether the named test should be excluded.
           */
          exclude?: boolean;
          /**
           * Name is the name of the test.
           */
          name: string;
          [k: string]: unknown;
        }[];
        /**
         * IgnoreFailures tells the controller to skip remediation when the Helm tests
         * are run but fail. Can be overwritten for tests run after install or upgrade
         * actions in 'Install.IgnoreTestFailures' and 'Upgrade.IgnoreTestFailures'.
         */
        ignoreFailures?: boolean;
        /**
         * Timeout is the time to wait for any individual Kubernetes operation during
         * the performance of a Helm test action. Defaults to 'HelmReleaseSpec.Timeout'.
         */
        timeout?: string;
        [k: string]: unknown;
      };
      /**
       * Timeout is the time to wait for any individual Kubernetes operation (like Jobs
       * for hooks) during the performance of a Helm action. Defaults to '5m0s'.
       */
      timeout?: string;
      /**
       * Uninstall holds the configuration for Helm uninstall actions for this HelmRelease.
       */
      uninstall?: {
        /**
         * DeletionPropagation specifies the deletion propagation policy when
         * a Helm uninstall is performed.
         */
        deletionPropagation?: 'background' | 'foreground' | 'orphan';
        /**
         * DisableHooks prevents hooks from running during the Helm rollback action.
         */
        disableHooks?: boolean;
        /**
         * DisableWait disables waiting for all the resources to be deleted after
         * a Helm uninstall is performed.
         */
        disableWait?: boolean;
        /**
         * KeepHistory tells Helm to remove all associated resources and mark the
         * release as deleted, but retain the release history.
         */
        keepHistory?: boolean;
        /**
         * Timeout is the time to wait for any individual Kubernetes operation (like
         * Jobs for hooks) during the performance of a Helm uninstall action. Defaults
         * to 'HelmReleaseSpec.Timeout'.
         */
        timeout?: string;
        [k: string]: unknown;
      };
      /**
       * Upgrade holds the configuration for Helm upgrade actions for this HelmRelease.
       */
      upgrade?: {
        /**
         * CleanupOnFail allows deletion of new resources created during the Helm
         * upgrade action when it fails.
         */
        cleanupOnFail?: boolean;
        /**
         * CRDs upgrade CRDs from the Helm Chart's crds directory according
         * to the CRD upgrade policy provided here. Valid values are `Skip`,
         * `Create` or `CreateReplace`. Default is `Skip` and if omitted
         * CRDs are neither installed nor upgraded.
         *
         * Skip: do neither install nor replace (update) any CRDs.
         *
         * Create: new CRDs are created, existing CRDs are neither updated nor deleted.
         *
         * CreateReplace: new CRDs are created, existing CRDs are updated (replaced)
         * but not deleted.
         *
         * By default, CRDs are not applied during Helm upgrade action. With this
         * option users can opt-in to CRD upgrade, which is not (yet) natively supported by Helm.
         * https://helm.sh/docs/chart_best_practices/custom_resource_definitions.
         */
        crds?: 'Skip' | 'Create' | 'CreateReplace';
        /**
         * DisableHooks prevents hooks from running during the Helm upgrade action.
         */
        disableHooks?: boolean;
        /**
         * DisableOpenAPIValidation prevents the Helm upgrade action from validating
         * rendered templates against the Kubernetes OpenAPI Schema.
         */
        disableOpenAPIValidation?: boolean;
        /**
         * DisableSchemaValidation prevents the Helm upgrade action from validating
         * the values against the JSON Schema.
         */
        disableSchemaValidation?: boolean;
        /**
         * DisableTakeOwnership disables taking ownership of existing resources
         * during the Helm upgrade action. Defaults to false.
         */
        disableTakeOwnership?: boolean;
        /**
         * DisableWait disables the waiting for resources to be ready after a Helm
         * upgrade has been performed.
         */
        disableWait?: boolean;
        /**
         * DisableWaitForJobs disables waiting for jobs to complete after a Helm
         * upgrade has been performed.
         */
        disableWaitForJobs?: boolean;
        /**
         * Force forces resource updates through a replacement strategy.
         */
        force?: boolean;
        /**
         * PreserveValues will make Helm reuse the last release's values and merge in
         * overrides from 'Values'. Setting this flag makes the HelmRelease
         * non-declarative.
         */
        preserveValues?: boolean;
        /**
         * Remediation holds the remediation configuration for when the Helm upgrade
         * action for the HelmRelease fails. The default is to not perform any action.
         */
        remediation?: {
          /**
           * IgnoreTestFailures tells the controller to skip remediation when the Helm
           * tests are run after an upgrade action but fail.
           * Defaults to 'Test.IgnoreFailures'.
           */
          ignoreTestFailures?: boolean;
          /**
           * RemediateLastFailure tells the controller to remediate the last failure, when
           * no retries remain. Defaults to 'false' unless 'Retries' is greater than 0.
           */
          remediateLastFailure?: boolean;
          /**
           * Retries is the number of retries that should be attempted on failures before
           * bailing. Remediation, using 'Strategy', is performed between each attempt.
           * Defaults to '0', a negative integer equals to unlimited retries.
           */
          retries?: number;
          /**
           * Strategy to use for failure remediation. Defaults to 'rollback'.
           */
          strategy?: 'rollback' | 'uninstall';
          [k: string]: unknown;
        };
        /**
         * ServerSideApply enables server-side apply for resources during upgrade.
         * Can be "enabled", "disabled", or "auto".
         * When "auto", server-side apply usage will be based on the release's previous usage.
         * Defaults to "auto".
         */
        serverSideApply?: 'enabled' | 'disabled' | 'auto';
        /**
         * Strategy defines the upgrade strategy to use for this HelmRelease.
         * Defaults to 'RemediateOnFailure'.
         */
        strategy?: {
          /**
           * Name of the upgrade strategy.
           */
          name: 'RemediateOnFailure' | 'RetryOnFailure';
          /**
           * RetryInterval is the interval at which to retry a failed upgrade.
           * Can be used only when Name is set to RetryOnFailure.
           * Defaults to '5m'.
           */
          retryInterval?: string;
          [k: string]: unknown;
        };
        /**
         * Timeout is the time to wait for any individual Kubernetes operation (like
         * Jobs for hooks) during the performance of a Helm upgrade action. Defaults to
         * 'HelmReleaseSpec.Timeout'.
         */
        timeout?: string;
        [k: string]: unknown;
      };
      /**
       * Values holds the values for this Helm release.
       */
      values?: {
        [k: string]: unknown;
      };
      /**
       * ValuesFrom holds references to resources containing Helm values for this HelmRelease,
       * and information about how they should be merged.
       */
      valuesFrom?: {
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
         * Optional marks this ValuesReference as optional. When set, a not found error
         * for the values reference is ignored, but any ValuesKey, TargetPath or
         * transient error will still result in a reconciliation failure.
         */
        optional?: boolean;
        /**
         * TargetPath is the YAML dot notation path the value should be merged at. When
         * set, the ValuesKey is expected to be a single flat value. Defaults to 'None',
         * which results in the values getting merged at the root.
         */
        targetPath?: string;
        /**
         * ValuesKey is the data key where the values.yaml or a specific value can be
         * found at. Defaults to 'values.yaml'.
         */
        valuesKey?: string;
        [k: string]: unknown;
      }[];
      /**
       * WaitStrategy defines Helm's wait strategy for waiting for applied
       * resources to become ready.
       */
      waitStrategy?: {
        /**
         * Name is Helm's wait strategy for waiting for applied resources to
         * become ready. One of 'poller' or 'legacy'. The 'poller' strategy uses
         * kstatus to poll resource statuses, while the 'legacy' strategy uses
         * Helm v3's waiting logic.
         * Defaults to 'poller', or to 'legacy' when UseHelm3Defaults feature
         * gate is enabled.
         */
        name: 'poller' | 'legacy';
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * KustomizationSpec defines the configuration to calculate the desired state
     * from a Source using Kustomize.
     */
    kustomization?: {
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
     * Namespace is the default target namespace where FluxCD resources will be created
     * when a Module is instantiated from this template.
     */
    namespace: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
